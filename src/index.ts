import "reflect-metadata";
import {createConnection} from "typeorm";
import { BlogIntegrationSource } from './entity/BlogPostIntegrationSource';
import { BlogPostFromIntegration } from './entity/BlogPostFromIntegration';

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

    const source = new BlogIntegrationSource();
    source.url = 'http://somewhere';
    await connection.manager.save(source);

    const post = new BlogPostFromIntegration();
    post.text = "Programming";
    post.integrationSource = source;
    const savedPost = await connection.manager.save(post);

    const repository = connection.getRepository(BlogPostFromIntegration);

    const fromDBPost = await repository.findOne({
      where: {
        id: savedPost.id
      },
      relations: ['integrationSource'],
    });

    console.log("integrationSource of post from DB", fromDBPost.integrationSource);

}).catch(error => console.log("Error: ", error));