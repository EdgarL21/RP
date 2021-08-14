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
import { Wrapper } from "./Portfolio.styles";

const Portfolio = () => {
  const [repos, setRepos] = useState(Repos);

  return (
    <div className="container">
      {repos && (
        <div className="row">
          {repos.map((repo) => (
            <div className="col-6 col-md-4">
              <Wrapper>
                <div></div>
                <div>{repo.title}</div>
              </Wrapper>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
