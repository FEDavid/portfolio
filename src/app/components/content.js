// Import components
import Post from "./reusable/post";

// Import utils
import getPosts from "../utils/posts";

export default async function Content() {

  // Manually add projects and pass details as props to component
  const projects = [
    {
      title: "PHP ticket web application",
      description: "A ticket system with functionality to allow users to view, comment on, assign, and remove assignment of tickets to themselves. Managers however have the ability to see their assigned team's tickets, in combination with the other base functionality. https://david-mould.dev/PHP_ticket-system/login.php - Working link! If you break it, please let me know how! Needed a bit of working to get deployed, but not too much. Tech stack; PHP (Vanilla, if I remake it I would use Laravel) JS HTML CSS (Bootstrap 5) MySQL",
      link: "https://github.com/FEDavid/PHP-ticket_system",
      anchor: "phpticket",
      category: "Portfolio",
      image: "/media/phpticket.png"
    },
    {
      title: "Flask weather web application",
      description: "This is a simple weather app using the free API provided by https://openweathermap.org/api. The app itself has been built with Python/Flask, obviously HTML and CSS - specifically some Bootstrap. I have utilized Bootstrap as it is native for responsive design. ",
      link: "https://github.com/FEDavid/flask-weather",
      anchor: "flaskweather",
      category: "Portfolio",
      image: "/media/flaskweather.png"
    },
    {
      title: "React PWA Safety App - Beacon",
      description: "Beacon is a React-based Progressive Web Application (PWA) that enables users to manually log their location, store it locally using IndexedDB, amend stored records (including titles and images), and automatically send location data to a user-defined email address.",
      link: "https://github.com/FEDavid/DWT-CW",
      anchor: "reactpwa",
      category: "Portfolio",
      image: "/media/reactpwa.png"
    }
  ];

  // Use getPosts to pull posts from DEV.to API
  const posts = await getPosts();

  return (
    <section id="content" className="px-6 py-12 md:py-24 justify-center items-center w-full bg-[var(--theme-darkest)] flex flex-col gap-12">

      {/* content */}
      <div className="max-w-6xl w-full flex flex-col justify-self-center gap-6 md:gap-12">
        {/* Projects */}
        <h2 className="text-4xl md:text-7xl font-bold ml-5"><span className="text-[var(--theme-light)] mr-0.5">.</span>Projects</h2>
        <div className="flex flex-col justify-self-center gap-12">
          {/* Map over projects */}
          {projects.map((project, index) => (
            <Post
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              category={project.category}
              anchor={project.anchor}
              image={project.image}
            />
          ))}
        </div>

        {/* Map over posts */}
        <h2 id="posts" className="text-4xl md:text-7xl font-bold ml-5 mt-6"><span className="text-[var(--theme-light)] mr-0.5">.</span>Posts</h2>
        <div className="flex flex-col justify-self-center gap-12">
          {posts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              description={post.description}
              link={post.url}
              category={"Post"}
              anchor={post.slug}
              image={post.cover_image}
            />
          ))}
        </div>
      </div>

    </section>
  );
}