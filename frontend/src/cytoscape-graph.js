import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
import cytoscape from 'cytoscape/dist/cytoscape.esm.min.js';

class CytoscapeGraph extends PolymerElement {
    static get template() {
        return html`
            <style>
                #cy {
                  width: 300px;
                  height: 300px;
                  display: block;
                  border: 1px solid red;
                }
            </style>
            <h1>Окно с графом</h1>
            <div id="cy">
            </div>`
    }

    static get is() {return 'cytoscape-graph'}

    attached() {
        var cy = cytoscape({

          container: document.getElementById()("cy"), // container to render in

          elements: [ // list of graph elements to start with
            { // node a
              data: { id: 'a' }
            },
            { // node b
              data: { id: 'b' }
            },
            { // edge ab
              data: { id: 'ab', source: 'a', target: 'b' }
            }
          ],

          style: [ // the stylesheet for the graph
            {
              selector: 'node',
              style: {
                'background-color': '#666',
                'label': 'data(id)'
              }
            },

            {
              selector: 'edge',
              style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle'
              }
            }
          ],

          layout: {
            name: 'grid',
            rows: 1
          }

        });
    }
}

customElements.define(CytoscapeGraph.is, CytoscapeGraph);
