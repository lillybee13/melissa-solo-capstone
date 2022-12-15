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
        cardOne: By = By.xpath("(//img[@class='card-back small'])")
        cardTwo: By = By.xpath("(//img[@alt='Pokemon Card'])[2]")
        resetBtn: By = By.xpath("//button[contains(@class,'resetBtn btn')]")
        twoPlayers: By = By.xpath("//button[@class='btn btn-dark']")
        noMatch: By = By.xpath("//button[@class='swal2-confirm swal2-styled']")
        stop: By = By.xpath("//button[@class='btn btn-dark']")

    constructor () {
        super({url: "https://benjamincook1313.github.io/Pokemon-api/"})  
    }

    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
}