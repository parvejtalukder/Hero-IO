import React from 'react';

const App = ({app}) => {

    // const ratings = app.ratings;
    // let biggest = ratings[0];
    // for (let i = 1; i < ratings.length; i++) {
    //     if (ratings[i].count > biggest.count) {
    //         biggest = ratings[i];
    //     }
    // }


    return (
        <div>
            <section>
                <figure>
                    <img src={app.image} alt={app.title} />
                </figure>
                <section>
                    <h2>{app.title}</h2>
                    <div>
                        <h2>{app.downloads}</h2>
                        <h2>{app.ratings}</h2>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default App;