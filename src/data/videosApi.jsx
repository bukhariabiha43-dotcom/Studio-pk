const videosByCategory = {
  sufi: [
    { id: "7ZPvNKEHujo", title: "Jo Mujh Main Hai Wo Tu hi Tu", artist: "FANA STUDIO", category: "sufi" },
    { id: "GbBzRBHwHzk", title: "Ishaq Ne Mujhy Fana Kar diya", artist: "FANA STUDIO", category: "sufi" },
    { id: "njj5MUwZJGs", title: "Pyar KA Raaz", artist: "FANA STUDIO", category: "sufi" },
    { id: "JPSXyphz42g", title: "JO Dil Ke Andar", artist: "Abida Parveen", category: "sufi" },
    { id: "wld1z2sTXQc", title: "Fana Main Mili ZINdgi", artist: "SUFI QAWALI", category: "sufi" },
    { id: "OEToHi140xI", title: "Jo Mjh MAin Bolta", artist: "Nusrat Fateh Ali Khan", category: "sufi" },
    { id: "dy_qfAzNdN4", title: "Maula Maula Lakh Pukare", artist: "FANA STUDIO", category: "sufi" },
    { id: "CRLbqZi22cI", title: "Jalwa Dekha Ke", artist: "FANA STUDIO", category: "sufi" },
    { id: "SW2OTjM6X_c", title: "Haal Dil", artist: "FANA STUDIO", category: "sufi" },
  ],
  indian: [
    { id: "bPk9bSvQQoc", title: "Pream Tran Paya", artist: "Salman Khan", category: "indian" },
    { id: "nYLkyW2dDXU", title: "Bejuria", artist: "Arijit Singh", category: "indian" },
    { id: "dSZy1daniZc", title: "Mere Sanam", artist: "Salman Khan", category: "indian" },
    { id: "vyaY4mZVXWw", title: "Tere Yadoon Main", artist: "Tiger Shroff", category: "indian" },
    { id: "hnEGQH4LP2c", title: "DIDI", artist: "Ranver Sing", category: "indian" },
    { id: "zqgsnFehCzY", title: "Ishaq ", artist: "Ranver Sing", category: "indian" },
    { id: "Nnop2walGmM", title: "Tum See", artist: "Shahid Kapoor", category: "indian" },
    { id: "hXh35CtnSyU", title: "Buliya", artist: "Arjit Sing", category: "indian" },
    { id: "zqgsnFehCzY", title: "Ishaq ", artist: "Ranver Sing", category: "indian" }
  ],
  punjabi: [
    { id: "G8PU1HjZZj4", title: "Lehnga", artist: "Diljit Dosanjh", category: "punjabi" },
    { id: "G8PU1HjZZj4", title: "DAru Mukgai", artist: "Diljit Dosanjh", category: "punjabi" },
    { id: "5g0UEE2t_70", title: "Bahana", artist: "Diljit Dosanjh", category: "punjabi" },
    { id: "xtgC88yFXeM", title: "Tu Menu Puchhda Nai", artist: "Niha Kakar", category: "punjabi" },
    { id: "HRA1us5ArXc", title: "Gadi Kali", artist: "Niha Kakar", category: "punjabi" },
    { id: "B_hbJRNInkA", title: "Pajama Kala", artist: "Tony kakar", category: "punjabi" }
  ],
  pakistani: [
    { id: "B-J_PuEhyOM", title: "Rafta Rafta Sanam (Live)", artist: "Atif Aslam", category: "pakistani" },
    { id: "r6IwFiZW3dc", title: "Asan Pal Bu tokhy", artist: "Saif Samejo", category: "pakistani" },
    { id: "KcC_fcISOWA", title: "Bhale Yar Aen", artist: "Saif Samejo", category: "pakistani" },
    { id: "e2rhtdydlxQ", title: "Sapna Sapna tuhnja (Coke Studio)", artist: "Saif Samejo", category: "pakistani" },
    { id: "9Njc-0AsN7g", title: "Manat Murad", artist: "Har Pal Jeo", category: "pakistani" },
    { id: "1a3iHRLkWjA", title: "Dil Hara", artist: "Atif Aslam", category: "pakistani" }
  ]
};

export const getVideosByCategory = (category) => videosByCategory[category] || [];

export const getAllVideos = () => Object.values(videosByCategory).flat();

export const getVideoById = (id) => getAllVideos().find((video) => video.id === id);

export const getSuggestedVideos = (video) => {
  if (!video) return [];

  const sameCategory = getVideosByCategory(video.category).filter((item) => item.id !== video.id);

  if (sameCategory.length >= 4) {
    return sameCategory.slice(0, 4);
  }

  const extraVideos = getAllVideos().filter(
    (item) => item.id !== video.id && item.category !== video.category
  );

  return [...sameCategory, ...extraVideos].slice(0, 4);
};
