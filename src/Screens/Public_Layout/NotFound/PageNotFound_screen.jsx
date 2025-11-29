import "./PageNotFound_styles.css";
import { Link } from "react-router-dom";

export const PageNotFound_screen = () => {
  return (
    <section class="page-404">
      <div class="content-404">
        <span class="badge-404">ERROR 404</span>
        <h1 class="title-404">
          PAGE NOT
          <span class="highlight"> FOUND</span>
        </h1>
        <p class="description-404">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track!
        </p>
        <div class="buttons-404">
          <Link to={"/"} class="btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};
