const dataJSON = {
    nama: 'ihsan',
    kelas: [
        {
            kelas: 1,
            guru: 'saya'
        },
        {
            kelas: 2,
            guru: 'saya'
        },
        {
            kelas: 3,
            guru: 'saya'
        },
        {
            kelas: 4,
            guru: 'saya'
        }

    ]
    

}

dataJSON.kelas.map(data =>{
    console.log(data.kelas.guru)
})