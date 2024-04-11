

export default async function AboutUs(){
    return(
    <main>
    <h1 className="text-3xl">Documentation</h1>
    <p>
        <h1 className="text-2xl">------Features to implement--------</h1>
        <p>
            <ul className="mb-3 text-2xl font-semibold">
                <li>Create the onboarding process with questionnaire to get user preference and create account</li>
                <li>Integrate morphcast sdk into the whole onboarding process</li>
                <li>Based on the questionnaire, present a dashboard with all the relevant candidates tagged with their policies and parties</li>
                <li>To be more engaging, introduce a chatbot to answer questions related to election</li>
            </ul>
        </p>
    </p>        
    </main>
    )
}