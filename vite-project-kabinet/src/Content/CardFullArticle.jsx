import "./article.style.css"

export const CardFullArticle = ({title}) => {
    return (
        <main>
            <article className="article">
                <header className="article__header">
                    <h1 className="article__title">{title}</h1>
                    <span className="article__author">Miroslav Činčár</span>
                    <span className="article__date">24. novembra 2024</span>
                </header>

                <section className="article__content">
                    <p>
                        Neprečítané texty sú nepreskúmané miestnosti. Stojíme v kníhkupectve, antikvariáte či knižnici a všade okolo sú knihy. Texty v nich sú v tej chvíli pre nás zamknuté. Možno nás zaujme obálka alebo dizajn niektorej z nich, a tú si kúpime, alebo požičiame. Možno „ideme na istotu“, poučení predchádzajúcim čítaním. Neskôr sa doma naplno začítame. Buď nás oslovia, alebo nie. Takýto je osud kníh a čitateľov.
                    </p>
                    <p>
                    Ak máme šťastie, natrafíme na knihy, ktoré s nami v živote ostávajú. K autorom a autorkám sa pravidelne vraciame aj vďaka nejakému detailu – odseku, vete, slovosledu, ba dokonca len slovnému spojeniu či slovu. Text sa často otvorí drobnosťou – takú silu dokáže mať jediné slovo. Už veta má v sebe potenciál stať sa pre niekoho dôležitou.
                    </p>
                    <p>
                    Svojho času som takto čítal podmanivý český preklad poviedky Guy de Maupassanta Korsický bandita. Krátky trojstranový príbeh vyšiel pôvodne v roku 1882 v novinách Gil Blas. Korzičan, sprevádzajúci návštevníka ostrova, v ňom rozpráva príbeh o mladom mužovi, ktorému iný mladík v bitke zabil otca. Keďže sa na ostrove rodiny riadili vendetou, bolo jeho povinnosťou pomstiť sa. Slabý a bojazlivý syn však neurobil nič. Žil so sestrou utiahnuto v dome a trúchlil. Prešiel určitý čas. Jedného dňa sa muž, ktorého z vraždy podozrievali, ženil a demonštratívne šiel so sprievodom popred dom súrodencov. Vtedy sa v synovi čosi zlomilo a ženícha a jeho kamaráta ešte toho večera zastrelil. Keďže žandári po ňom vyhlásili pátranie, odišiel od sestry a utiekol do hôr. Pri prestrelkách aj ďalej zabíjal svojich nepriateľov, ktorí ho prenasledovali, vyškrabával im oči a z neho, predtým tak mierneho, sa stal najstrašnejší bandita.
                    </p>           
                </section>
            </article>
        </main>
    )
}