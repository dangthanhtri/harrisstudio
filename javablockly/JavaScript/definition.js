Blockly.Blocks['pinsetting'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("腳位")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"]]), "pinNumber")
          .appendField("模式設為")
          .appendField(new Blockly.FieldDropdown([["輸入","INPUT"], ["輸出","OUTPUT"]]), "pinSet");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pinstatus'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("腳位")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"]]), "pinNumber")
          .appendField("數位輸出")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["0","0"]]), "digitalWrite");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['ledstatus'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("腳位")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"]]), "pinNumber")
          .appendField("LED 設置為")
          .appendField(new Blockly.FieldDropdown([["亮","1"], ["暗","0"]]), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };