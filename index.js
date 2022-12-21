const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

(async () => {
    //const userName = readlineSync.question('Username : ');
    const userName = '19312194';
    //const password = readlineSync.question('Password : ', { hideEchoBack: true});
    const password = '';

    const options = { waitUntil: 'networkidle2' }
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();

    await page.goto('https://spada.teknokrat.ac.id/login/');
    const emailField = await page.$('#username')
    await emailField.type(userName)
    await emailField.dispose()

    const passwordField = await page.$('#password')
    await passwordField.type(password)
    await passwordField.dispose()

    const buttonSubmit = await page.$('#loginbtn')
    await buttonSubmit.click()
    await buttonSubmit.dispose()
    await page.waitForNavigation()

    if (page.url() == 'https://spada.teknokrat.ac.id/') {
        console.log('Login Sukses...')

        await page.goto('https://spada.teknokrat.ac.id/course/view.php?id=5005', options);
        const buttonSubmit = await page.$('#module-320851 > div > div > div:nth-child(2) > div.activityinstance > a > span')
        await buttonSubmit.click()
        await buttonSubmit.dispose()
        await page.waitForNavigation()

    } else {
        console.log('Login Gagal...')
    }

  //await browser.close();
})();
