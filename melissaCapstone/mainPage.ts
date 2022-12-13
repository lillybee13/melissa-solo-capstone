import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

    export class Pokemon extends BasePage {
        searchBar: By = By.className("form-control")
        searchBtn: By = By.id("button-addon2")
        gmpSearch: By = By.xpath("//button[@class='btn btn-secondary']")
        sortBy: By = By.xpath("(//button[@type='button'])[2]")
        selectGen: By = By.xpath("(//button[@id='dropdown-basic-button'])[2]")
        type: By = By.xpath("(//button[@id='dropdown-basic-button'])[3]")
        play: By = By.xpath("//button[text()='Play Memory']")

    constructor () {
        super({url: "https://benjamincook1313.github.io/Pokemon-api/"})  
    }

    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
}