import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BlogIntegrationSource } from './BlogPostIntegrationSource';

@Entity()
export class BlogPostFromIntegration {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    text: string;

    @ManyToOne((_type) => BlogIntegrationSource)
    @JoinColumn({ name: 'blogpost_integration_id' })
    integrationSource: BlogIntegrationSource;

    @Column()
    blogpost_integration_id: number;

}
