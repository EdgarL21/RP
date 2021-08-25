// // import useFetch from "../../useFetch";

// const Portfolio = () => {
//   const { data, error, isPending } = useFetch(
//     "https://api.github.com/users/edgarl21/repos"
//   );

//   return (
//     <div>
//       {/* {isPending && <div>Loading...</div>} */}
//       {/* {error && <div>{error}</div>} */}
//       {data && (
//         <div>
//           {data.map((repo) => (
//               <a href={repo.html_url}>
//                   <div>{repo.name}</div>
//                   <div>{repo.html_url}</div>
//               </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Portfolio;

import { useState } from "react";
import Repos from "../data/repos.json";
import { Wrapper, Btn } from "./Portfolio.styles";

const Portfolio = () => {
  const [repos, setRepos] = useState(Repos);

  return (
    <div className="container">
      {repos && (
        <div className="row">
          {repos.map((repo) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={repo.id}>
              <Wrapper>
                {/* <a href={repo.link}> */}
                <Btn>
                  <a href={repo.repo} target="blank">
                    {repo.title} Repository
                  </a>
                </Btn>
                <a href={repo.link} target="blank">
                  <img
                    className="image"
                    src={repo.src}
                    alt={repo.alt}
                    width="100%"
                    height="60%"
                  ></img>
                </a>

                {/* </a> */}
              </Wrapper>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
