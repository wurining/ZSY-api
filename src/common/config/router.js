module.exports = [
    [/^\/api\/admin_menu(?:\/(\d+))?$/, 'admin_menu?id=:1', 'rest'],
    [/^\/api\/auth_access(?:\/(\d+))?$/, 'auth_access?id=:1', 'rest'],
    [/^\/api\/auth_rule(?:\/(\d+))?$/, 'auth_rule?id=:1', 'rest'],
    [/^\/api\/nav(?:\/(\d+))?$/, 'nav?id=:1', 'rest'],
    [/^\/api\/nav_menu(?:\/(\d+))?$/, 'nav_menu?id=:1', 'rest'],
    [/^\/api\/role(?:\/(\d+))?$/, 'role?id=:1', 'rest'],
    [/^\/api\/role_user(?:\/(\d+))?$/, 'role_user?id=:1', 'rest'],
    [/^\/api\/user(?:\/(\d+))?$/, 'user?id=:1', 'rest'],
    [/^\/api\/user_token(?:\/(\d+))?$/, 'user_token?id=:1', 'rest']
];
