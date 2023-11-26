import './Home.css'

export default function Home(): JSX.Element {
    return (
        <div className="about-site">
            <p>
                Here is another app for <span className="about-site__byte5">byte5</span>. This time, written in <strong>React</strong>. This time it's more complex than the previous one in Vue. It is similar to the task assigned to me during the interview.
            </p>
            <p>
                It has been published using <strong>AWS S3</strong>.
            </p>
        </div>
    )
}
