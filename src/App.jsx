import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardDinamic from './components/CardDinamic'

function App() 
{
  return (
    <div className="App">
      <Card></Card>
      <CardDinamic title="sudokopytník" text="The 1988 United States presidential election in Georgia took place on November 8, 1988. All 50 states and the District of Columbia, were part of the 1988 United States presidential election. Georgia voters chose 12 electors to the Electoral College, which selected the president and vice president.

Georgia was won by incumbent United States Vice President George H. W. Bush of Texas, who was running against Massachusetts Governor Michael Dukakis. Bush ran with Indiana Senator Dan Quayle as Vice President, and Dukakis ran with Texas Senator Lloyd Bentsen. " link="bambus" linkurl="https://en.wikipedia.org/wiki/1988_United_States_presidential_election_in_Georgia">
      </CardDinamic>
      <CardDinamic title="hydroponie" link="závody" linkurl="https://en.wikipedia.org/wiki/Brahmanbaria_Sadar_Upazila" text="The area Syed Mahmud resided in was named Kazipara (Kazi being a variant of Qadi) after him, and his mazar (mausoleum) remains there.[2]

Brahmanbaria Thana was converted into an upazila in 1984.[3]

However, there are many opinions or discussions among the locals about the name of Brahmanbaria district being Brahmanbaria. The most popular and accepted discussion is that once upon a time there were many people of Sanatan religion living in Brahmanbaria. (There are still significant Sanatan religious people living in various places). Then there was lack of Brahmins to perform puja or religious rituals for orthodox people. The then king of the region sent several Brahmin families from faraway Calcutta to settle here. From there the name of this area is Brahmanbaria. Initially a few families lived in Kazipara and Kandhipara areas of the city. Originally the name of this place was Brahmanbari. Later on, the entire district was named Brahmanbaria.">
      </CardDinamic>
      <CardDinamic title="škopek" link="autonehoda" linkurl="https://en.wikipedia.org/wiki/Sriwati_Masmundari" text="Sriwati Masmundari (1904–2005), often known simply as Masmundari, was an Indonesian visual artist known for her work with a traditional kind of lantern-painting from her birthplace Gresik called damar kurung.[1][2][3][4] She became famous for it very late in life, having her first public exhibition in 1987; by the 1990s her work was featured by national magazines such as Kompas, in national art exhibitions and in the Indonesian Presidential Palace.[4] Her work, which is sometimes described as folk art or Naïve art, often depicted vibrant scenes of celebrations, families, women at work, and so on.">
      </CardDinamic>
      <CardDinamic title="bioluminiscence" link="mastodont" linkurl="https://en.wikipedia.org/wiki/James_E._Katz" text="James E. Katz is an American communication scholar with an expertise in new media (especially concerning the Internet, social media, and mobile phone). He has published widely and is frequently invited to comment on his research at both academic and public policy forms as well as to give interviews to media outlets.

In 2012, Katz was appointed the Feld Professor of Emerging Media at Boston University’s College of Communication.[1] In addition, he directs its newly established Division of Emerging Media Studies[2] and Center for Mobile Communication Studies.

Prior to his appointment, he was professor and chair of the Department of Communication at Rutgers University, NJ, USA. Also at Rutgers University, in 2012, he received the highest honor that can be bestowed on one of its faculty members, the designation of Board of Governors Professor of Communication [need citation]. Preceding his tenure at Rutgers, Katz served as a Senior Scientist directing the social science research unit at Bell Communications Research (Bellcore) Telcordia Technologies. Katz has also taught at the University of Texas, Austin, where he also served as chair of the Austin World Affairs Council. He has also served term as editor-in-chief of Human Communication Research, a flagship journal of the International Communication Association.">
      </CardDinamic>
    </div>
  )
}

export default App
