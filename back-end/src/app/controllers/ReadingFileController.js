const multer = require('multer');
const readline = require('readline');
const fs = require('fs');
const ReadingFilesRepository = require('../repositories/ReadingFilesRepository');
const data = require('../utils/readFile');

class ReadingFileController{
    async index(request, response){
        const logs = await ReadingFilesRepository.findAll();

        response.json(logs);
    }

    async store(request, response) { 
        const dataFile = await data;
        const dataArray = dataFile.split('\n');
        const limitsData = dataArray.slice(0, 1000);

        for (const formateData of limitsData) {
            const insertLogs = await ReadingFilesRepository.create(formateData);
        }

        return response.status(200).send();
    }

}

module.exports = new ReadingFileController();

