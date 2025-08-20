// 夜间模式切换功能
(function() {
    const btn = document.getElementById('darkModeToggle');
    if (!btn) return;
    // 读取本地存储
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark');
    }
    btn.onclick = function() {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'on');
        } else {
            localStorage.setItem('darkMode', 'off');
        }
    };
})();
