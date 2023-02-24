import "https://deno.land/std@0.178.0/dotenv/load.ts";


const url_params = new URLSearchParams()
url_params.set("secretToken", Deno.env.get("SECRET_TOKEN") ?? "")
url_params.set("endpointId", "4326")
url_params.set("ownedDevicesOnly", "false")
url_params.set("pageSize", "20")
url_params.set("tenantId", "e218aacc-de10-4e61-bde2-e5966b1722dc")
url_params.set("lastMaxEventId", "908013915536460")
url_params.set("lastMaxEventTimestamp", "1668638187918")

const api_endpoint = "https://api.anyconnect.com/v2/event-messaging/events?" 

const results = await fetch(api_endpoint + url_params)
const results_json = await results.json()
console.log(results_json);

