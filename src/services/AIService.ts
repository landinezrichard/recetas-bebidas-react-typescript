import { streamText } from "ai";
import { openrouter } from "../config/ai";

export default {
  async generateRecipe(prompt: string) {
    // console.log("Prompt desde AIService: ", prompt);
    const result = streamText({
	  // model: openRouter.chat('openrouter/auto'),
      //permite utilizar cualquier modelo gratuito que este libre en ese momemnto
      model: openrouter.chat('minimax/minimax-m3.1-flash:free'),
	  instructions: "Eres un experto en coctelería y mixología. Genera una receta de bebida alcohólica o no alcohólica en español, basada en los ingredientes proporcionados por el usuario. La receta debe incluir el nombre de la bebida, los ingredientes necesarios con sus cantidades, y las instrucciones paso a paso para prepararla. Asegúrate de que la receta sea clara, concisa y fácil de seguir.",
      prompt,
    });

    // console.log("result desde AIService: ", result);
	return result.textStream;
  },
};
