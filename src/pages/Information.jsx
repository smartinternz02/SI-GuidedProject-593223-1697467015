import NavbarComp from "../components/Navbar";
import "./Information.css";
import Footer from "../components/Footer";
import img1 from '../images/monkeypox-1.jpeg'
import img2 from '../images/monkeypox-2.jpeg'
import img3 from '../images/monkeypox-3.jpeg'

export default function Information() {
  return (
    <div className="InfoContainer">
      <NavbarComp />
      <h1 className="teamHeading info">So What is Monkeypox?</h1>
      <div className="InfoContent">
        <div className="briefIntro">
          <p className="IntroText">
            Mpox (formerly known as monkeypox) is a rare disease caused by
            infection with the mpox virus. Monkeypox virus is part of the same
            family of viruses as variola virus, the virus that causes smallpox.
            Mpox symptoms are similar to smallpox symptoms, but milder, and mpox
            is rarely fatal. Mpox is not related to chickenpox.
          </p>
          <img src={img1} alt="Sample" className="ProfileImg" />
        </div>
        <h2>History of Monkeypox</h2>
        <div className="historyMpox">
          <img src={img2} alt="Sample" className="ProfileImg landscape" />
          <div className="historyContent">
            <p>
              Mpox was discovered in 1958 when two outbreaks of a pox-like
              disease occurred in colonies of monkeys kept for research. Despite
              being named “Monkeypox virus,” the source of the disease remains
              unknown. However, African rodents and non-human primates (like
              monkeys) might harbor the virus and infect people.
            </p>
            <p>
              The first human case of mpox was recorded in 1970. Before the 2022
              outbreak, mpox had been reported in people in several central and
              western African countries. Previously, almost all mpox cases in
              people outside of Africa were linked to international travel to
              countries where the disease commonly occurs or through imported
              animals. These cases occurred on multiple continents.
            </p>
          </div>
        </div>
        <h2>Types of Monekey Pox</h2>
        <div className="typesMpox">
          <p>
            There are two types of mpox virus: Clade I and Clade II. The Clade I
            type of mpox virus has a fatality rate around 10%. Infections in the
            2022–2023 outbreak are from Clade II, or more specifically, Clade
            IIb. Infections with Clade IIb are rarely fatal. More than 99% of
            people who get this form of the disease are likely to survive.
            However, people with severely weakened immune systems, children
            younger than 1 year of age, people with a history of eczema, and
            people who are pregnant or breastfeeding may be more likely to get
            seriously ill or die.
          </p>
          <img src={img3} alt="Sample" className="ProfileImg landscape" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
