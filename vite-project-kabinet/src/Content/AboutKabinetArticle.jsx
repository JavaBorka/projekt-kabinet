import "./about.style.css"
import "./article.style.css"

export const AboutKabinetArticle = () => {
    
    return (
        <main>
            <div className="about-kabinet article article--width">
                <div className="about-kabinet__item">
                    <p>
                        Internetový časopis Kabinet pre literatúru a kultúru vydáva od roku 2020 v Košiciach občianske združenie Upupa epops.
                    </p>
                    <p>
                        Časopis nehľadá oporu v obvyklých rámcoch, nevymedzuje sa generačne, rodovo, ideologicky, žánrovo alebo regionálne, ale zakladá sa na presvedčení, že literatúra a uvažovanie o nej nemusia iba napĺňať nejaký vopred daný účel, ale môžu mať zmysel. Kabinet sa vo svojich rubrikách sústreďuje na písanie, ktoré prirodzene súvisí s rozmanitými prejavmi kultúry, aj s každodenným životom. Eseje, básne, prózy, úvahy, či poznámky, ktoré uverejňuje, zdroj významu nehľadajú vonku, v určitom predmete, ale v objavovaní ľudsky osobitého vzťahu k nemu. Svojim prispievateľom a čitateľom ponúka sústredenú kabinetnú atmosféru malého redakčného tímu, ktorý nad textami dlho diskutuje.
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
                        Názov: Upupa epops o. z.<br />
                        Právna forma: Občianske združenie<br />
                        IČO: 50925750<br />
                        Ulica: Nešporova 276/24<br />
                        Mesto: Košice<br />
                        PSČ: 040 11<br />
                        Bankový účet: SK3083300000002901547846<br />
                        Názov banky: Fio banka a.s.
                    </p>

                    <p>
                        <em>Ďakujeme za vašu finančnú podporu časopisu</em>
                    </p>
                </div>
            </div>
        </main>
    )
}