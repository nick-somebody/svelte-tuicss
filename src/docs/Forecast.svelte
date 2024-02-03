<script lang="ts">
  import TuiProgressBar from "../lib/components/TuiProgressBar.svelte";
  import TuiScreen from "../lib/components/TuiScreen.svelte";
  import { Color, DarkBackground } from "../lib/enums";
</script>

<TuiScreen res="800" bordered class="black-255">
  <div class="red-168 full-width white-text" style:padding={"0px 10px"}>
    FORECAST 1.0
  </div>
  <br />
  <table class="tui-table full-width no-border">
    <thead
      class="white-255-text tui-border-double orange-168-border"
      style:marginBottom={"5px"}
    >
      <tr class="left-align">
        <th>#</th>
        <th>LOCATION</th>
        <th>TEMPERATURE</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody class="tui-border-double orange-168-border">
      <tr>
        <td class="red-168-text">1</td>
        <td>Lisbon</td>
        <td>
          <span class="green-168-text">&nbsp;8.0</span>
          <TuiProgressBar barWidth="350px" progress={58} />
        </td>
        <td class="blue-255-text">COLD</td>
      </tr>
      <tr>
        <td class="red-168-text">2</td>
        <td>Vancouver</td>
        <td>
          <span class="green-168-text">&nbsp;9.0</span>
          <TuiProgressBar color={Color.Green} barWidth="350px" progress={60} />
        </td>
        <td class="blue-255-text">COLD</td>
      </tr>
      <tr>
        <td class="red-168-text">3</td>
        <td>Rio</td>
        <td>
          <span class="green-168-text">31.0</span>
          <TuiProgressBar color={Color.Blue} barWidth="350px" progress={81} />
        </td>
        <td class="yellow-255-text">WARM</td>
      </tr>
      <tr>
        <td class="red-168-text">4</td>
        <td>Sydney</td>
        <td>
          <span class="green-168-text">22.0</span>
          <TuiProgressBar color={Color.Cyan} barWidth="350px" progress={72} />
        </td>
        <td class="yellow-255-text">WARM</td>
      </tr>
      <tr>
        <td class="red-168-text">5</td>
        <td>New York</td>
        <td>
          <span class="green-168-text">&nbsp;7.0</span>
          <TuiProgressBar color={Color.Purple} barWidth="350px" progress={57} />
        </td>
        <td class="blue-255-text">COLD</td>
      </tr>
      <tr>
        <td class="red-168-text">6</td>
        <td>London</td>
        <td>
          <span class="green-168-text">&nbsp;6.0</span>
          <TuiProgressBar color={Color.Yellow} barWidth="350px" progress={56} />
        </td>
        <td class="blue-255-text">COLD</td>
      </tr>
      <tr>
        <td class="red-168-text">7</td>
        <td>Paris</td>
        <td>
          <span class="green-168-text">&nbsp;4.0</span>
          <TuiProgressBar color={Color.Orange} barWidth="350px" progress={54} />
        </td>
        <td class="cyan-255-text">VERY COLD</td>
      </tr>
      <tr>
        <td class="red-168-text">8</td>
        <td>Casablanca</td>
        <td>
          <span class="green-168-text">17.0</span>
          <TuiProgressBar
            barWidth="350px"
            progress={67}
            background={DarkBackground.Red}
            color={Color.Green}
          />
        </td>
        <td class="green-168-text">NORMAL</td>
      </tr>
      <tr>
        <td class="red-168-text">9</td>
        <td>Reykjavik</td>
        <td>
          <span class="green-168-text">-1.0</span>
          <TuiProgressBar
            barWidth="350px"
            progress={10}
            background={DarkBackground.Green}
            color={Color.Purple}
          />
        </td>
        <td class="cyan-255-text">VERY COLD</td>
      </tr>
    </tbody>
  </table>
  <div
    class="purple-168 full-width white-text"
    style:padding="0px 10px"
    style:marginTop="2px"
  >
    <span class="red-168">HIGH</span>: Rio 31.0<br />
    <span class="cyan-168">LESS</span>: Reykjavik -1.0
  </div>
  <br />
  <div class="tui-window full-width no-shadow black">
    <fieldset class="tui-fieldset center">
      <button class="tui-button left">Previous</button>
      <span class="center">9/201 records</span>
      <button class="tui-button right">Next</button>
    </fieldset>
  </div>
  <div class="red-168 full-width white-text" style:padding="0px 10px">
    FORECAST 1.0
  </div>
</TuiScreen>
