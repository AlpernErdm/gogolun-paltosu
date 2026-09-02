import {createClient} from "@sanity/client"
import {apiVersion, dataset, projectId} from "../env"

/**
 * Statik export (output: "export") sunucu calisma zamani olmadan derlenir,
 * bu yuzden Live Content API / ISR kullanamayiz. Veri build sirasinda
 * cekilir; icerik guncellendiginde webhook tam bir yeniden derlemeyi
 * tetikler (bkz. README).
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
