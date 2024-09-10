import FaqItem from "./FaqItem"


const FaqComp = ()=>{

    const faqs = [
        {
           question :"How many bones does a cat have? ",
           answer : "a cat has 230 bones - 6 more than human"
        },
        {
           question : "how much do cat sleep ? ",
           answer : " The average sleep of cat is 12-16 hour per day"
        },
        {
            question : "How long do cat live ?",
            answer : "outdoor cat live 5 years on average and indoors cat live 15 years on average"
        }
    ]
 return(
    <>
    <h1> Frequently Asked Questions</h1>
    {faqs.map((faq, index)=>{
        return(
            <>
              <FaqItem faq = {faq} index={index}/>
            </>
        )
    })}
    </>
 )
}

export default FaqComp