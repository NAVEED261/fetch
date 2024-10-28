// Server-side static rendering mein, jab user ek webpage ko request karta hai, to server us webpage ka poora HTML tayar karke user ke browser ko bhej deta hai. Yeh HTML file pre-generated hoti hai, matlab pehle se server ne tayyar kar rakhi hoti hai, aur har user ke liye wahi HTML file bheji jati hai. Isme kisi bhi tarah ka dynamic content generate nahi hota. Jaise keh, ek book ko print karke har kisi ko de dena, woh bhi bina kisi changes ke.



// Server-side dynamic rendering mein, jab user ek webpage ko request karta hai, to server us webpage ke content ko user ke request ke hisab se generate karta hai. Isme webpage ka content user ke inputs, database se ya kisi aur external source se aata hai. Jaise keh, ek restaurant mein har customer ke liye alag-alag order tayar karna. Har user ke liye alag-alag HTML file generate hoti hai, jo unke request ke hisab se banai jati hai.

// inshort, server-side static rendering ka istemal un websites ke liye kiya jata hai jo jyada dynamic nahi hoti, jaise ke blogs, company websites, ya static content ke liye. Jabki server-side dynamic rendering un websites ke liye istemal hota hai jo har user ke liye alag-alag aur personalized content ko require karti hai, jaise ke e-commerce sites ya social media platforms.
// src/app/page.tsx
const getdata = async () => {
  const fetchdata = await fetch("https://api.quotable.io/random?tags=technology", {
    cache: "force-cache"
  });
  let res = await fetchdata.json();
  return res;
};

interface Data {
  content: string;
  id: string;
}

const Home = async () => {
  const data: Data = await getdata();

  return (
    <div className="flex min-h-screen flex-col items-center p-24 text-lg gap-10">
      <h1 className="text-center text-blue-800">SERVER SIDE STATIC RENDERING</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Home;
