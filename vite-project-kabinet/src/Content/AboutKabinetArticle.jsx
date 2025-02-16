import "./about.style.css"
import "./article.style.css"

export const AboutKabinetArticle = () => {
    
    return (
        <main>
            <div className="about-kabinet article article--width">
                <div className="about-kabinet__item">
                    <p>
                        Internetový časopis Kabinet pre literatúru a kultúru vydáva občianske združenie Upupa epops od roku 2020.
                    </p>
                    <p>
                        Jeho vznik bol prirodzeným vyústením skúseností a podnetov získaných počas desiatok stretnutí, prednášok a diskusií organizovaných v Kabinete pomalosti Novej Cvernovky v Bratislave. Časopis nehľadá oporu v obvyklých rámcoch, nevymedzuje sa generačne, rodovo, ideologicky alebo regionálne, ale zakladá sa na presvedčení, že literatúra a uvažovanie o nej, pokiaľ majú mať zmysel, nemôžu byť svetom samým pre seba, ale prirodzene súvisia s inými prejavmi kultúry a s každodenným životom. Časopis sa vo svojich rubrikách sústreďuje na esejistické a autorské písanie a žánre súvisiace s literárnou reflexiou. Kabinet pomalosti a časopis Kabinet pre literatúru a kultúru spája snaha objavovať nové prístupy a publikovať texty, ktoré ich hľadajú. Svojim prispievateľom a čitateľom ponúka sústredenú kabinetnú atmosféru malého, zanieteného redakčného tímu.
                    </p>
                </div>
                <div className="about-kabinet__item">
                    <h1>Redakcia</h1>
                    <p>
                        Juraj Briškár<br />
                        Laura Kladeková<br />
                        Dalfar
                    </p>
                </div>
                <div className="about-kabinet__item">
                    <h1>Technická realizácia</h1>
                    <p>
                        Barbora Lendacká
                    </p>
                </div>
                <address className="about-kabinet__item">
                    <h1>Kontakty</h1>
                    <p>
                        Kabinet pomalosti<br />
                        Nová Cvernovka<br />
                        Račianska 78<br />
                        831 02 Bratislava
                    </p>
                    <p>
                        Upupa epops, o. z.<br />
                        Nešporova 276/24<br />
                        040 11 Košice<br />
                    </p>
                    <p>
                        casopiskabinet@gmail.com
                    </p>
                    <p>
                        ISSN  2729-7993
                    </p>
                </address>
                <div className="about-kabinet__item">
                    <h1>Bankové údaje</h1>
                    <p>
                        <em>Ďakujeme za vašu finančnú podporu časopisu</em>
                    </p>
                    <p>
                        Názov: Upupa epops o. z.<br />
                        Právna forma: Občianske združenie<br />
                        IČO: 50925750<br />
                        Ulica: Nešporova 276/24<br />
                        Mesto: Košice<br />
                        PSČ: 040 11<br />
                        Bankový účet: SK3083300000002901547846<br />
                        Názov banky: Fio banka a.s.
                    </p>
                </div>
            </div>
        </main>
    )
}