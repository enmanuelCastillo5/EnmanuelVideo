import md5 from 'md5';

const Gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    const formattedEmail = (email).trim().toLowerCase();
    const hash = md5(formattedEmail, { econding: "binary" });
    return `${base}${hash}` 
}

export default Gravatar;