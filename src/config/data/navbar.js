export const navbarData = {
    routes: [
        { path: '/', name: 'Trang Chủ', icon: 'fas fa-home' },
        { path: '/gioi-thieu', name: 'Giới Thiệu', icon: 'fas fa-user' },
        { path: '/ky-nang', name: 'Kỹ Năng', icon: 'fas fa-code' },
        { path: '/du-an', name: 'Dự Án', icon: 'fas fa-project-diagram' },
        { path: '/lien-he', name: 'Liên Hệ', icon: 'fas fa-envelope' }
    ],
    social: [
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/binhantt'
        },
        // {
        //     name: 'LinkedIn',
        //     icon: 'fab fa-linkedin',
        //     url: 'https://linkedin.com/in/binhan'
        // }
    ],
    cv: {
        text: 'Tải CV',
        icon: 'fas fa-download',
        url: '/assets/cv.pdf'
    }
}