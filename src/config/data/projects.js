export const projectsData = {
    title: "Dự án của tôi",
    icon: "fas fa-code-branch",
    projects: [
        {
            title: 'Vue-AnatonLandingPage',
            description: 'Trang landing page giới thiệu sản phẩm với giao diện hiện đại, hiệu ứng chuyển động mượt mà và tương thích trên mọi thiết bị.',
            image: '/bt.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
            demo: 'https://ecommerce.binhan.dev',
            github: 'https://github.com/binhan/ecommerce'
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
            description: 'Website CV cá nhân hiện đại được xây dựng với Vue 3 và Bootstrap Vue, tích hợp nhiều tính năng như timeline kinh nghiệm, form liên hệ, chế độ theme động, và hiệu ứng chuyển động mượt mà. Thiết kế responsive và tối ưu trải nghiệm người dùng.',
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