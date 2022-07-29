const fs = require('fs/promises');
const { nextTick } = require('process');

const { v4: uuidv4 } = require('uuid');

//const emailsDatabasePath = require('../database/emails.js');

const getEmails = async (pathToFile) => {
    try {
        const result = await fs.readFile(pathToFile);
        const emails = JSON.parse(result.toString());

        return emails;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}

const addEmail = async (pathToFile, email) => {
    try {
        const emails = await getEmails(pathToFile);
        const foundIndex = emails.findIndex((item) => item.email === email)

        if (foundIndex === -1) {
            emails.push({
                id: uuidv4(),
                email
            });
            await fs.writeFile(pathToFile, JSON.stringify(emails, undefined, '\t'));
            return 'Email was added';
        }

        throw new Error('Email just exist in database');

    } catch (error) {
        console.log(error.message);
        return error;
    }

};

module.exports = {
    getEmails,
    addEmail
};
