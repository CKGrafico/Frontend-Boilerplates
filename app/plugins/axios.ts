export default function ({ $axios }) {
    $axios.onRequest(config => {
        config.headers.Auth = 'Bearer [your token here]';
    });

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 401) {
            console.log('Unauthorized user, redirect to login');
        }
    });
}