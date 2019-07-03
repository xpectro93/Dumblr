DROP DATABASE IF EXISTS dumblr;
CREATE DATABASE dumblr;

\c dumblr;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS blogs;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS followings;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS likes;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  bio VARCHAR,
  pic_url VARCHAR

);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  title VARCHAR
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  publish_date TIMESTAMP DEFAULT NOW(),
  blog_id INT REFERENCES blogs(id),
  user_id INT REFERENCES users(id),
  type VARCHAR,
  title VARCHAR NOT NULL,
  description VARCHAR,
  post VARCHAR
);

CREATE TABLE post_tags (
  id SERIAL PRIMARY KEY,
  tag_id INT REFERENCES tags(id),
  post_id INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE ,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE
);


CREATE TABLE followings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  follower_id INT REFERENCES users(id)
);

INSERT INTO users(username, password, email,bio,pic_url) VALUES
('Bro','Bruh','broscience@bromail.bro','Nothing Comes between me and my bros, bro. Not even another bro, but hes my bro still. Cause bros stick together, bro. ','https://pbs.twimg.com/profile_images/465854334333640704/yCMzjLkw.jpeg'),
('Bruh','Bro','shredded@bromail.bro','I like to lift, lifting is like totally rad, bro.','https://i1.wp.com/www.dirtopia.com/w/images/thumb/7/7c/Flatbiller.jpg/397px-Flatbiller.jpg'),
('Son','yee132','guccigang@gucci.gucci','I love to post about mah shoes and my monies','https://vignette.wikia.nocookie.net/aj-failure-club/images/4/42/Lil_pump.png/revision/latest/scale-to-width-down/310?cb=20180312161827'),
('TriggerMeTimbers','hillary2016','equity@lgbt.org','I love to complain and get offended by everything','https://pm1.narvii.com/6121/32e02d2b4e4a739d09dcda592c50dc7035aad2eb_hq.jpg'),
('Artsygurl','vangone96','paintBrush@pencil@draw','I like to post about art and complain about how new art is nothing compared to old art','http://cdn3.spiegel.de/images/image-1058142-860_poster_16x9-fnvw-1058142.jpg'),
('Merican','trump2016','truPatriot@usa.USA','i like to be out the window and keep watch for them weird looking people outside my neighborhood =-=','https://media.tenor.com/images/14d0023bf938868a38b27c598ee665e3/tenor.gif'),
('GamerSanDesuKawaii','narutodabest666','naniDaF@shonen.jump','Anime is wayyy better than cartoons! dont like it, fight me.','https://res.cloudinary.com/teepublic/image/private/s--V9gXKCDA--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1505962906/production/designs/1920548_1.jpg');

INSERT INTO blogs(user_id, title) VALUES
(1,'A Bro Place where we can bro out, bros!'),
(3,'Sneakers r neat!'),
(5,'Cat n Doggos'),
(2,'Ya even lift, bro!');

INSERT INTO tags(name) VALUES
('pikachu'),('lifting'),('feminism'),('Naruto'),('trump'),('paint'),('cats'),('dogs'),('gundam');


INSERT INTO posts(blog_id,user_id,type,title, description,post) VALUES
(3,5,'PHOTO','Cute Doggo','this dog is so cute, omg','http://www.digitaljournal.com/img/8/0/8/6/4/7/i/6/9/0/o/Ugly_dog.jpg'),
(3,5,'TEXT','Cute kitty','this cat reminds me of my neighbor Sally, LOL','https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/12/cat-parody-instagram-removal.jpg');



INSERT INTO post_tags(tag_id,post_id) VALUES
(7,2),(8,1),(1,1),(3,1),(5,1);

INSERT INTO likes (user_id,post_id) VALUES
(1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(1,2),(2,2),(3,2);

INSERT INTO followings (user_id, follower_id) VALUES
(1,2),(2,1);
