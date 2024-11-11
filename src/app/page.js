import Card from "./_components/card";
import HeroSection from "./_components/heroSection";
import Slect from "./_components/slect";
import Title from "./_components/title";



export default function Home() {
  let card= []
  for (let i = 0; i < 3; i++) {
    card.push(<Card key={i}/>)
  }
  return (
    
    
      <div className="container mx-auto px-4">
      <HeroSection/>
      <section className="my-20">
        <Title title="احدث الابيات الشعرية  " link="/later"/>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {card}
        </div>
      </section>
      <section className="my-20">
        <Title title="كل المقاطع" link="/media"/>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {card}
        </div>
      </section>
      <Slect slect='2' />
      <Slect slect='1' />
      </div>
  );
}
