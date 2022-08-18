import React from 'react';

const Search = ({ search }) => {

    console.log(search)
    const { body, email, name } = search

    return (
        <>
            <div className='px-3 md:px-5 py-2 rounded'>
                <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://placeimg.com/192/192/people" alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg font-medium">
                                {body}
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                Sarah Dayan
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </>
    );
};

export default Search;