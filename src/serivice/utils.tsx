// export const getResponse = <T> (res: Response): Promise<T> =>{
//     return res.ok ? res.json() : Promise.reject('Ошибка ${res.status}');
// }

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const refreshToken = async () => {
    const res = await fetch('https://norma.nomoreparties.space/api/auth/token', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    });
    return checkResponse(res);
};

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
    try {
        const res: Response = await fetch(url, options);
        return await checkResponse(res);
    } catch (err: any) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken(); //обновляем токен
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            setCookie("accessToken", refreshData.accessToken);
            if (!options.headers) return;
            if (options.headers instanceof Headers) {
                options.headers.set("authorization", refreshData.accessToken);
            }
            const res = await fetch(url, options); //повторяем запрос
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export function getCookie(name: string) {
    const matches = document.cookie.match(
            // eslint-disable-next-line
            new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string | number | boolean | null, props: any={}) {
    if (!value) return;
    props = {
        path: '/',  //задаем корневой адрес для cookies
        ...props
    };

    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}

export const deleteCookie = (name: string) => {
    setCookie(name, null, {expires: -1});
}
