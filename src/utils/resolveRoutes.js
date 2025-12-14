const resolveRoutes = (route) => {
    if (route === '/') {
        return '/';
    } else if (/^character\/\d+$/.test(route)) {
        return '/character/:id';
    } else if (route === 'contact') {
        return '/contact';
    }
    return '/404';
};

export default resolveRoutes;