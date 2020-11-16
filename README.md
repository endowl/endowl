# Endowl :owl: - Virtual Estate Planning

Learn about Endowl and sign-up for project updates at [endowl.com](https://endowl.com/)

---

## Endowl.com website maintenance using Jekyll and Github Pages

### ONE TIME SETUP:

#### WINDOWS: Install Jekyll on local development machine:

- Download and install the latest “Ruby+Devkit” from https://rubyinstaller.org/downloads/

- During installation there will be a prompt to install “MSYS2”; when given 3 choices, enter “1” for “MSYS2 base installation”.

- In a new Command Prompt, install Jekyll and the Ruby package manager by running:

        gem install jekyll bundler

#### LINUX & MAC OS: Install Jekyll on local development machine:

- See: https://jekyllrb.com/docs/installation/

#### Clone ‘endowl’ Jekyll repository:

- In a Command Prompt or terminal, change to the desired project parent directory.

- Clone project from github:

        clone https://github.com/endowl/endowl.git

### USAGE:

#### Local development server:

- Start local Jekyll development server from the project directory:

        bundle exec jekyll serve

- Stop a running Jekyll development server:

        [ctrl]-c

- Start Jekyll with drafts of blog posts visible locally:

        bundle exec jekyll serve --drafts

- Access development server at http://127.0.0.1:4000/

#### Blog posts:

- Store blog posts as `.html` or `.md` files in:

    	blog/_posts/

- Name blog post files in this format: `YEAR-MONTH-DAY-title.EXTENSION`

    For example:

        blog/_posts/2020-11-13-this-day-in-history.html

- Blog posts should start with a “Front Matter” block like this example:

        ---
        layout: post
        title: Introducing Endowl 🦉
        subtitle: Create Your Family Fortune
        ---

#### Stand-alone Pages:

- Store anywhere except special folders that start with an underscore.

    Eg. do NOT store in the subdirectories:

        blog/_posts/ , _posts/ , _site/ , _layouts/ ...

- Okay to store in project root directory and subdirectories

    Eg. okay to store directly in:
 
        ./ , blog/ , assets/images/ , ...

- Okay to create arbitrary subdirectories and store files in them, eg:

        estate-planning/resources.html

- When processed by Jekyll, markdown files will be converted to HTML and their extensions will change from .md to .html on the generated site

- To be processed by Jekyll, pages must start with a “Front Matter” block like this:

        ---
        layout: page
        title: Estate Planning Glossary
        ---

- To generated the page at a different path, include a permalink variable in the Front Matter block, like:

        ---
        layout: page
        title: Estate Planning Glossary
        permalink: /glossary
        ---

#### Including and Linking to local assets and pages:

- Pages can be accessed with URLs that include or omit the trailing “.html”, eg. both of these are okay: `/estate-planning-glossary` and `/estate-planning-glossary.html` 

- In markdown, include an image on the page like this:

        ![My helpful screenshot](/assets/screenshot.jpg)

- In markdown, link to a local file or page like this:

        ... you can [get the PDF](/assets/mydoc.pdf) directly.

- In HTML specify file paths with this syntax to generate links relative to the site root:

        {{ "/assets/images/Endowlhoriz.png" | relative_url }}

- In HTML a local image tag should look like:

        <img src="{{ "/assets/images/Endowlhoriz.png" | relative_url }}">

- In HTML a link to a local file should look like:

        <a href="{{ "/estate-planning-glossary" | relative_url }}">


#### Github:

- It can be more convenient to use git through a visual IDE, but the most common tasks can be done with these commands:

- To download and merge any changes to the project, run:

        git pull

- To save all local changes and push them up to github, run:

        git add -all
        git commit -m "message describing changes"
        git push

#### Stylesheets:

- The main (SASS) stylesheet for the site is generated from `assets/css/main.scss`

- The resulting (CSS) stylesheet is published to `assets/css/main.css`

#### Misc Notes:

- When “jekyll serve” is running locally, most file changes will be processed automatically.  Changes to _config.yml are not automatically loaded and require restarting Jekyll.

- Use caution if editing _config.yml as .yml files are notoriously easy to mess up with incorrect whitespacing.

#### Reference:

Jekyll documentation:
- https://jekyllrb.com/docs/pages/
- https://jekyllrb.com/docs/posts/

“How to Create a Blog Using Jekyll and GitHub Pages on Windows”:
- https://www.kiltandcode.com/2020/04/30/how-to-create-a-blog-using-jekyll-and-github-pages-on-windows/
