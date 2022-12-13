import {By} from 'selenium-webdriver'
import {Pokemon} from "./mainPage";
const pokemon = new Pokemon

let sort: string [] = ['A-Z', '#', 'Shuffle']
let types: string[] = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass','Electric', 'Psychic','Ice','Dragon', 'Dark', 'Fairy']
let gen: string[] = ['Gen 1', 'Gen 2', 'Gen 3']

describe ("Testing main page", () => {

    test ("search for Pikachu", async () => {
        await pokemon.navigate()
        await pokemon.search("Pikachu")
        await pokemon.click(pokemon.searchBtn)
        await pokemon.driver.sleep(1000)
        await pokemon.click(pokemon.gmpSearch)
    })

    test ("Sort By", async () => {
        types.forEach(async (sort) => {
            await pokemon.click(pokemon.sortBy)
            await pokemon.click(By.linkText(sort))
        })
    })

    test ("Select Generation", async () => {
        types.forEach(async (gen) => {
            await pokemon.click(pokemon.selectGen)
            await pokemon.click(By.linkText(gen))
        })
    })

    test ("Select Type", async () => {
        types.forEach( async (type) => {
           await pokemon.click(pokemon.type)
           await pokemon.click(By.linkText(type))
        }) 
    })

    test ("Play Memory Button", async () => {
        await pokemon.click(pokemon.play)
        await pokemon.driver.sleep(1000)
        await pokemon.driver.quit()
        })
    })