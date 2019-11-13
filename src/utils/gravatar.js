import md5 from 'md5';

const Gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    const formatEmail = (email).trim().toLowerCase();
    const hash = md5(formatEmail, { econding: "binary" });
    return `${base}${hash}` 
}

export default Gravatar;