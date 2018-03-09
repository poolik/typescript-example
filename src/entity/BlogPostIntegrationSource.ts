import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BlogPostFromIntegration } from './BlogPostFromIntegration';

@Entity()
export class BlogIntegrationSource {

    @PrimaryGeneratedColumn()
    blog_integration_source_id: number;

    @Column()
    url: string;

    @OneToMany((_type) => BlogPostFromIntegration, 'integrationSource')
    posts: BlogPostFromIntegration[];

}
