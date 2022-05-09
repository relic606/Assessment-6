
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    // driver.get('http://localhost:3000/')
    driver.get('https://qa-devops-assessment-pt3.herokuapp.com/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw button displays robots section to choose from', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(2000)
    const drawDisplayed = await driver.findElement(By.id("choices")).isDisplayed()
    expect(drawDisplayed).toBe(true)    
})

test('Clicks draw button on first robot, and then clicks remove from duo', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(2000)
    const addBotBtn = await driver.findElement(By.xpath("//button[text()='Add to Duo']"))

    addBotBtn.click()
    await driver.sleep(2000)
    const removeBtn = await driver.findElement(By.xpath("//button[text()='Remove from Duo']"))
    removeBtn.click()
    await driver.sleep(2000)
})