export const projectsData = {
    title: "Dự án của tôi",
    icon: "fas fa-code-branch",
    projects: [
        {
            title: 'Vue-AnatonLandingPage',
            description: 'Một nền tảng thương mại điện tử đầy đủ tính năng với quản lý sản phẩm, giỏ hàng và tích hợp thanh toán.',
            image: '/bt.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
            demo: 'https://ecommerce.binhan.dev',
            github: 'https://github.com/binhan/ecommerce'
        },
        {
            title: 'Ứng dụng Quản lý Công việc',
            description: 'Ứng dụng quản lý công việc nhóm với tính năng cập nhật thời gian thực và các tính năng làm việc nhóm.',
            image: '/assets/images/projects/taskmanager.jpg',
            technologies: ['React', 'Firebase', 'Material-UI'],
            demo: 'https://tasks.binhan.dev',
            github: 'https://github.com/binhan/taskmanager'
        },
        {
            title: 'Backend API Service',
            description: 'RESTful API service xây dựng với Express.js và TypeScript, cung cấp xác thực người dùng và quản lý danh mục. Tích hợp JWT, mã hóa mật khẩu và xác thực captcha.',
            image: '/sever.png',
            technologies: [
                'Node.js',
                'TypeScript',
                'Express.js',
                'MySQL',
                'JWT',
                'Bcrypt'
            ],
            demo: 'https://api.binhan.dev/docs',
            github: 'https://github.com/binhan/doanbankend'
        },
        {
            title: 'CV Portfolio Website',
            description: 'Landing page với các hiệu ứng chuyển động mượt mà, animation đẹp mắt và giao diện người dùng tương tác.',
            image: '/cv-portfolio.png',
            technologies: [
                'Vue 3',
                'Bootstrap Vue',
                'AOS Animation',
                'Font Awesome',
                'CSS Variables'
            ],
            demo: 'https://binhan-cv.vercel.app',
            github: 'https://github.com/binhan/cv'
        },

    ]
}