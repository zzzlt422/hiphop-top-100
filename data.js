const mySongs = [
    {
        "name": "顽家",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1qQ4y1y76w/?spm_id_from=333.337.search-card.all.click&vd_source=13174093b25a3b37e46289e1cdbb923e"
    },
    {
        "name": "玛瑙/屠宰室",
        "artist": "Gali",
        "url": "https://www.bilibili.com/video/BV1WR4y1y756/?spm_id_from=333.337.search-card.all.click&vd_source=13174093b25a3b37e46289e1cdbb923e"
    },
    {
        "name": "LOVE OR HATE",
        "artist": "Yee",
        "url": "https://music.163.com/song?id=503656412"
    },
    {
        "name": "Ghost Town",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1UqS4B1EXY/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "28",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1zt411r7tR/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "唯唯",
        "artist": "Asen",
        "url": "https://music.163.com/song?id=2163619024"
    },
    {
        "name": "Devil In A New Dress",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1QVpozJE3Q/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Violent Crimes",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1crtKe7E8g/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Father Stretch My Hands Pt.1",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1Ek4y1m7uq/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Lost",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1st411R7Wb/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Street Lights",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1UK41117mQ/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "XXX",
        "artist": "Yee",
        "url": "https://music.163.com/song?id=1321382028"
    },
    {
        "name": "喜新恋旧",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1ut411m77N/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "不用去猜",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1jz4y197XL/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "无人区玫瑰",
        "artist": "Capper",
        "url": "https://www.bilibili.com/video/BV1Bv411v7nz/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "陪你过冬天",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1Qz4y197aV/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Flashing Lights",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1GF411D7UQ/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "No Child Left Behind",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1534y1F7Bm/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "暴风雨",
        "artist": "马思维",
        "url": "https://www.bilibili.com/video/BV1uZ4y1L77S/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "I Don‘t Care",
        "artist": "AR",
        "url": "https://www.bilibili.com/video/BV1of4y147jb/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Falling Down",
        "artist": "Yee",
        "url": "https://music.163.com/song?id=1321391023"
    },
    {
        "name": "2019.3.25",
        "artist": "Yee",
        "url": "https://music.163.com/song?id=1354333281"
    },
    {
        "name": "I Wonder",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1fg411h71q/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Darling, I",
        "artist": "Tyler, The Creater",
        "url": "https://www.bilibili.com/video/BV1DV1LYEEYK/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Audrey",
        "artist": "Gali",
        "url": "https://www.bilibili.com/video/BV1UM4y1K7Ym/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "dancing on my own",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV15c411876K/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "迷宫",
        "artist": "依加",
        "url": "https://www.bilibili.com/video/BV1s142187Ev/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "All Of The Lights",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1Xu411Y7Du/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "版图",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV1LK4y1i7By/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "收敛水",
        "artist": "蛋堡",
        "url": "https://www.bilibili.com/video/BV14T411E7X1/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "住你耳朵里",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1aX4y157Ba/?spm_id_from=333.337.search-card.all.click&vd_source=13174093b25a3b37e46289e1cdbb923e"
    },
    {
        "name": "春节梦",
        "artist": "Vansdaddy",
        "url": "https://www.bilibili.com/video/BV1VQEuz5EJ2/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "MidSummer Madness",
        "artist": "Higher",
        "url": "https://www.bilibili.com/video/BV1zW411A7Xz/?spm_id_from=333.337.search-card.all.click&vd_source=13174093b25a3b37e46289e1cdbb923e"
    },
    {
        "name": "梦寐以求",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1b34y1m7H5/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Lost In The World",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV19e41117j7/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "山脚",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1Ag411W7JD/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Bound 2",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1ja4y157xi/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "在雨后醒来",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV1u8mYBZEvo/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "喜欢",
        "artist": "Yee",
        "url": "https://www.bilibili.com/video/BV1HW411e7dh/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Moon",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1q3411f7vB/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Like Him",
        "artist": "Tyler, The Creater",
        "url": "https://www.bilibili.com/video/BV13uS4YxEKC/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "玛瑙",
        "artist": "Gali",
        "url": "https://www.bilibili.com/video/BV1HM4y1d7T1/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Old Friend",
        "artist": "马思维",
        "url": "https://www.bilibili.com/video/BV1K1ktYNE7e/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "欢迎光临",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV19a4y1J7VP/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "爱梭之城",
        "artist": "Vansdaddy",
        "url": "https://www.bilibili.com/video/BV1ToJVznEYT/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Butterflies",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV1CnRcYSEwU/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Hey Mama",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1gX4y117on/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Come to Life",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1RS4y1Z76E/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "忘了没",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1CU4y1F7Da/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "We Major",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1yq4y1z7z5/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Touch The Sky",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1NX4y1A7Ed/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "热水澡",
        "artist": "蛋堡",
        "url": "https://www.bilibili.com/video/BV13k4y1R71W/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "阿姆斯特丹",
        "artist": "马思维/KnowKnow",
        "url": "https://www.bilibili.com/video/BV1BE411H7S9/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Yes day",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV13W411v7Vb/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "POP OUT",
        "artist": "MULA SAKEE",
        "url": "https://www.bilibili.com/video/BV1X2YYexEVu/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "777 woes",
        "artist": "MULA SAKEE",
        "url": "https://www.bilibili.com/video/BV1F3411e7mV/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "琥珀",
        "artist": "Gali",
        "url": "https://www.bilibili.com/video/BV1No4y1A7Le/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "PeopleGetReady!",
        "artist": "Vansdaddy",
        "url": "https://www.bilibili.com/video/BV1TyR6YqEhg/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "云飞扬",
        "artist": "MULA SAKEE",
        "url": "https://www.bilibili.com/video/BV1eFqVBnEdt/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "文城",
        "artist": "Vansdaddy",
        "url": "https://www.bilibili.com/video/BV1nE421c7B8/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Ultralight Beam",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1pe4y1G75Y/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "关于小熊",
        "artist": "蛋堡",
        "url": "https://www.bilibili.com/video/BV1WgNUzBEqU/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "返老还童",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1yE411q7AA/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "睡前老报纸",
        "artist": "Jony J",
        "url": "https://music.163.com/song?id=31260615"
    },
    {
        "name": "孤独面店",
        "artist": "Gali",
        "url": "https://www.bilibili.com/video/BV1iq4y1y7FF/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "711",
        "artist": "Higher",
        "url": "https://www.bilibili.com/video/BV1Fx411n7fq/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Going Down",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV1DjieBKEPc/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Let u go",
        "artist": "黄格雷",
        "url": "https://music.163.com/song?id=3322063318"
    },
    {
        "name": "Isabellae",
        "artist": "Higher",
        "url": "https://www.bilibili.com/video/BV15W41187Wi/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "What'll U Do",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1sa4y1Y7gK/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "暗巷",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1Cb4y1h7sj/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Celebrate",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV1PF1dYnEe5/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "小镇爱",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV1Pj411v7w3/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "history",
        "artist": "Rich Brian",
        "url": "https://www.bilibili.com/video/BV1it411f7JF/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "POWER",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1b34y1F7KD/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "God Is",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1144y1k715/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Almost Home",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1CW411k7is/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "SLIME SCHOOL",
        "artist": "MULA SAKEE",
        "url": "https://www.bilibili.com/video/BV1Si421Q7Lz/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "午夜心碎俱乐部3&4&5.2&6&8",
        "artist": "大D",
        "url": ""
    },
    {
        "name": "军火库",
        "artist": "AR",
        "url": "https://www.bilibili.com/video/BV1Cg411f7B7/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Promise",
        "artist": "马思维",
        "url": "https://www.bilibili.com/video/BV1pK4y1J7Pb/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Hit the Rhyme",
        "artist": "蛋堡",
        "url": "https://www.bilibili.com/video/BV1wbWbz8EpJ/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Gold Digger",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1oX4y1C7j2/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "未曾改变",
        "artist": "蛋堡",
        "url": "https://www.bilibili.com/video/BV1r2WNzfECL/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "What U Gon Do",
        "artist": "Asen",
        "url": "https://www.bilibili.com/video/BV1Xb4y137qk/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "卖火柴的小女孩",
        "artist": "马思维",
        "url": "https://www.bilibili.com/video/BV1Xy4y1E7Lx/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Slow Jamz",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1gx4y1f7k6/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "过程",
        "artist": "蛋堡",
        "url": "https://www.bilibili.com/video/BV1HW411n79C/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Berry",
        "artist": "Gali",
        "url": "https://www.bilibili.com/video/BV1kq8BziEFD/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "24",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV19S4y1A7Dd/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Burnin‘ SLowly",
        "artist": "黄格雷",
        "url": "https://www.bilibili.com/video/BV1C6mdBJEmP/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "CSC 2017 Cypher",
        "artist": "",
        "url": "https://www.bilibili.com/video/BV1qx411Y7Ue/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Off The Grid",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1vrHKeREPh/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "hunger on hillside",
        "artist": "J. Cole",
        "url": "https://www.bilibili.com/video/BV14w411x7JM/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "DARK",
        "artist": "Yee",
        "url": "https://www.bilibili.com/video/BV1pZ4y1u7TA/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "BURN",
        "artist": "Kanye",
        "url": "https://www.bilibili.com/video/BV1zZ421e7wR/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "开门见山",
        "artist": "Jony J",
        "url": "https://www.bilibili.com/video/BV1x741117tC/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "雪花",
        "artist": "Yee",
        "url": "https://www.bilibili.com/video/BV1VW4y1U7oW/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "Jeremy Scott Freestyle",
        "artist": "Gali",
        "url": "https://www.bilibili.com/video/BV1PJ4m1n7Gg/?spm_id_from=333.337.search-card.all.click"
    },
    {
        "name": "灵魂列车",
        "artist": "功夫胖",
        "url": "https://music.163.com/song?id=481783845"
    }
];
