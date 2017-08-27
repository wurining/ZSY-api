module.exports = [
    [/^\/api\/role(?:\/(\d+))?$/, 'role?id=:1', 'rest'],
    [/^\/api\/user(?:\/(\d+))?$/, 'user?id=:1', 'rest']
];
