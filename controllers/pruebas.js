function checkArray(roles) {
    const keywords = ['ADMIN', 'FIRM', 'LIBERA'];
    return roles.some(role => keywords.some(keyword => role.includes(keyword)));
}