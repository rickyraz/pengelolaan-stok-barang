import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatNum } from "../../i18n/format/format-num";
import { Link } from "@tanstack/react-router";
import Pokemon from "@/core/example/pokemon/pokemonapp";
import Todo from "@/core/example/todo/app-todo";
import JSONComponent from "@/core/example/fetch-example/tryfetch";

function Draft() {
  return <div>Draft</div>;
}

export default Draft;

const Draft = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 capitalize mt-6">
        <Link to="/login">login</Link>
        <Link to="/about">about</Link>
        <Link to="/dashboard">dashboard</Link>
      </div>
      <div className="flex justify-center items-center mt-11 mx-24">
        <Tabs defaultValue="todo" className="w-full ">
          <TabsList>
            <TabsTrigger value="todo">Todo App</TabsTrigger>
            <TabsTrigger value="json">JSON Placeholder</TabsTrigger>
            <TabsTrigger value="pokemon">Pokemon</TabsTrigger>
          </TabsList>
          <TabsContent value="todo">
            <Todo />
          </TabsContent>
          <TabsContent value="json">
            <JSONComponent />
          </TabsContent>
          <TabsContent value="pokemon">
            <Pokemon />
          </TabsContent>
        </Tabs>
      </div>
      <Cards />
    </>
  );
};

const Cards = () => {
  return (
    <Card className="max-w-xs mx-auto">
      <Text>Sales</Text>
      <Metric>{formatNum.format(71_465)}</Metric>
      <Flex className="mt-4">
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar value={32} className="mt-2" />
    </Card>
  );
};
