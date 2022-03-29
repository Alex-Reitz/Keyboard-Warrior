import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Products } from "../entities/Products";

@InputType()
class ProductInput {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  category: number;
  @Field()
  brand: number;
  @Field()
  price: number;
}

@Resolver(Products)
export class productResolver {
  @Query(() => [Products], { nullable: true })
  async allProducts() {
    return await Products.find({ relations: ["category", "brand"] });
  }

  @Mutation(() => Products)
  async addProduct(@Arg("input") input: ProductInput): Promise<Products> {
    console.log(input);
    return Products.create({
      ...input,
    }).save();
  }
}
