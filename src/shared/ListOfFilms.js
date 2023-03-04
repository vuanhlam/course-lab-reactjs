const listFilms = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsJTIwY29taWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        Title: 'Guardians of the Galaxy',
        background: 'http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_748,w_1332,x_3,y_132/c_fill,f_auto,h_1215,q_auto,w_2160/v1/m/b/d/bdc65a884c00ef4c925cadba059e7bc08a30b39c/20-facts-might-know-guardians-galaxy.jpg',
        Year: 1997,
        Nation: 'USA',
        video: 'https://www.youtube.com/embed/u3V5KDHRQvk'
    },
    {
        id: 2,
        image: 'https://image.tmdb.org/t/p/w500//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        Title: 'Avatar The Way Of Water',
        background: 'https://static01.nyt.com/images/2022/12/14/multimedia/14avatar1-1-6cf3/14avatar1-1-6cf3-superJumbo-v3.jpg',
        Year: 1987,
        Nation: 'Germany',
        description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Navi race to protect their home.',
        video: 'https://www.youtube.com/embed/Ru4Jbmh7bcQ'
    },
    {
        id: 3,
        image: 'https://cdn.galaxycine.vn/media/2023/1/30/vong-nhi-1_1675048542706.jpg',
        Title: 'Vong Nhi',
        background: 'https://i.ytimg.com/vi/jPxLYU5qixY/maxresdefault.jpg',
        Year: 1911,
        Nation: 'Việt Nam',
        video: 'https://www.youtube.com/embed/havKO5goRSc'
    },
    {
        id: 4,
        image: 'https://cdn.galaxycine.vn/media/2023/2/3/12_1675397865600.jpg',
        Title: 'Sword Art Online',
        background: 'https://gamek.mediacdn.vn/133514250583805952/2022/3/7/sword-art-online-16466411035761615694582.jpg',
        Year: 1997,
        Nation: 'China',
        video: 'https://www.youtube.com/embed/BmU2hC2DVf0'
    },
    {
        id: 5,
        image: 'https://cdn.galaxycine.vn/media/2023/1/31/muon-gap-anh-3_1675151552582.jpg',
        Title: 'Muốn Gặp Anh',
        background: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/1/9/1920x1080-someday-or-oneday.jpg',
        Year: 1997,
        Nation: 'Korea',
        video: 'https://www.youtube.com/embed/m838XNyLx48'
    },
    {
        id: 6,
        image: 'https://cdn.galaxycine.vn/media/2023/1/9/300wx450h_1673235381732.jpg',
        Title: 'Chị Chị Em Em',
        background: 'https://kenh14cdn.com/thumb_w/660/2019/12/12/ngang-6-1576158019787670926824.png',
        Year: 1997,
        Nation: 'Việt Nam',
        video: 'https://www.youtube.com/embed/j3r7kq0UZMw'
    },
    {
        id: 7,
        image: 'https://cdn.galaxycine.vn/media/2023/2/2/1200x1800_1675308979636.jpg',
        Title: 'TITANIC',
        background: 'https://i.ytimg.com/vi/cIJ8ma0kKtY/maxresdefault.jpg',
        Year: 2000,
        Nation: 'Italy',
        video: 'https://www.youtube.com/embed/F2RnxZnubCM'
    },
    {
        id: 8,
        image: 'https://cdn.galaxycine.vn/media/2023/1/14/nha-ba-nu-1_1673711231096.jpg',
        Title: 'Nhà Bà Nữ',
        background: 'https://i.ytimg.com/vi/IkaP0KJWTsQ/maxresdefault.jpg',
        Year: 2023,
        Nation: 'Việt Nam',
        video: 'https://www.youtube.com/embed/pg4L29p98Kw'
    },
    {
        id: 9,
        image: 'https://cdn.galaxycine.vn/media/2023/2/17/300x450-chuot_1676619603115.jpg',
        Title: 'Chuột Nhí Và Sứ Mệnh',
        background: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/2/28/1152477/ARGONUTS-2023_TAT-Pr.jpg',
        Year: 2007,
        Nation: 'USA',
        video: 'https://www.youtube.com/embed/adylr5CBxVQ'
    },
    {
        id: 10,
        image: 'https://cdn.galaxycine.vn/media/2023/2/14/tmp-w10gds-35978e81b8840468-unnamed-9-_1676385191286.webp',
        Title: 'END OF THE ROAD',
        background: 'https://i0.wp.com/dailyresearchplot.com/wp-content/uploads/2022/08/2-648.jpg?fit=1920%2C1080&ssl=1',
        Year: 2022,
        Nation: 'USA',
        video: 'https://www.youtube.com/embed/202KkD12AuI'
    }
    // ,
    // {
    //     id: 11,
    //     image: 'https://cdn.galaxycine.vn/media/2023/2/10/65-poster-skull-1080x1350_1675997817592.jpg',
    //     Title: 'Adam Driver',
    //     background: 'https://m.media-amazon.com/images/M/MV5BNGUyMDhkN2QtYTVhNC00ZWM3LWFhMmYtMzNjNGJmNmM5MjhhXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg',
    //     Year: 1991,
    //     Nation: 'USA',
    //     video: 'https://www.youtube.com/embed/bHXejJq5vr0'
    // }
]

export default listFilms